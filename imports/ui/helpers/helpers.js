import React, {useEffect, useState} from 'react'
import { useTracker } from 'meteor/react-meteor-data'

import _ from 'lodash'

// Collections
import {IG_Users} from '../../api/ig_users/ig_users'
import {IG_Media} from '../../api/ig_media/ig_media'
import {Lists} from '../../api/lists/lists'
import {Collabs} from '../../api/collabs/collabs'
import {CollabCreators} from '../../api/collab_creators/collab_creators'
import {CollabMedia} from '../../api/collab_media/collab_media'
import {CollabTimeseries} from '../../api/collab_timeseries/collab_timeseries'

// Use Account Hook
export const useAccount = () => useTracker(() => {
  const user = Meteor.user()
  const userId = Meteor.userId()
  return {
    user,
    userId,
    isLoggedIn: !!userId
  }
}, [])


// IG User Subscription
export const useInstagramUser = (username) => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('ig_users', username)
  const ig_user = IG_Users.findOne()
  return {
    ig_user,
    isLoadingUser: !subscription.ready()
  }
}, [username])


// IG User Media Feed Subscription
export const useInstagramMediaFeed = (username) => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('ig_media_pub', username)
  const ig_media = IG_Media.find().fetch()

  return {
    ig_media,
    isLoadingMedia: !subscription.ready()
  }
}, [username])


// All users Lists Subscription
export const useCollab = (_id) => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('collab', _id)

  const collab = Collabs.find({_id}).fetch()
  return {
    collab:collab[0],
    tags: typeof collab[0] !== 'undefined' ? _.reverse(collab[0].hashtags) : [],
    isLoadingCollab: !subscription.ready()
  }
}, [])


// All users Lists Subscription
export const useCollabs = () => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('collabs')

  const collabs = Collabs.find({setup_complete: true}).fetch()

  return {
    collabs,
    isLoadingCollabs: !subscription.ready()
  }
}, [])


// All users Lists Subscription
export const useCollabCreators = (collabId) => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('collab_creators', collabId)

  const collabCreators = CollabCreators.find({userId: Meteor.userId(), collabId}).fetch()

  return {
    collabCreators: _.reverse(collabCreators),
    isLoadingCreators: !subscription.ready()
  }
}, [])


// All users Lists Subscription
export const useCollabMedia = () => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('collab_media')
  const collabMedia = CollabMedia.find().fetch()
  
  return {
    collabMedia,
    isLoadingCollabMedia: !subscription.ready()
  }
}, [])


// All users Lists Subscription
export const useCollabTimeseries = () => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('collab_timeseries')
  const collabTimeseries = CollabTimeseries.find().fetch()

  return {
    collabTimeseries: collabTimeseries[0] ? collabTimeseries[0].ts : {ts:[]},
    isLoadingCollabTimeseries: !subscription.ready()
  }
}, [])


// All users Lists Subscription
export const useLists = () => useTracker(() => {
  // The publication must also be secure
  const subscription = Meteor.subscribe('lists')

  const lists = Lists.find().fetch()

  return {
    lists,
    isLoadingLists: !subscription.ready()
  }
}, [])


// Singular List Subscription
export const useList = (_id) => useTracker(() => {
  // List Of Creators subscription
  const listSubscription = Meteor.subscribe('creator_list', _id)
  const creators = IG_Users.find().fetch()
  const list = Lists.find().fetch()

  return {
    list: list[0],
    creators,
    isLoadingList: !listSubscription.ready()
  }
}, [])


// Our hook
export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      // Set debouncedValue to value (passed in) after the specified delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Return a cleanup function that will be called every time ...
      // ... useEffect is re-called. useEffect will only be re-called ...
      // ... if value changes (see the inputs array below). 
      // This is how we prevent debouncedValue from changing if value is ...
      // ... changed within the delay period. Timeout gets cleared and restarted.
      // To put it in context, if the user is typing within our app's ...
      // ... search box, we don't want the debouncedValue to update until ...
      // ... they've stopped typing for more than 500ms.
      return () => {
        clearTimeout(handler);
      };
    },
    // Only re-call effect if value changes
    // You could also add the "delay" var to inputs array if you ...
    // ... need to be able to change that dynamically.
    [value] 
  );

  return debouncedValue;
}


export const useCreateListForm = (callback) => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault()
    }
    callback()
  }

  const handleInputChange = (event) => {
    event.persist()
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}


// Key Press Hook
export const useKeyPress = (targetKey) => {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

// Click Outside Hook
export const useOutsideClick = (ref, handler) => {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);

      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};


// Window Resize Hook
export const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}


