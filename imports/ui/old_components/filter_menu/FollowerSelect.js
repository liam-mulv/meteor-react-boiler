import React, {useState} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)
import HRNumbers from 'human-readable-numbers'
import {
	FilterSelectWrapper,
	BarChart,
	Bar,
	SliderContainer,
	InputContainer,
	PriceInputWrapper,
	PriceInput,
	FilterButtonWrapper,
	FilterButton
} from './FilterMenu.sc'

// Icons
import FollowersIcon from '../../icons/user-friends'

const BarData = [
	{count:0, followers: 100},
	{count:0, followers: 200},
	{count:2, followers: 300},
	{count:5, followers: 400},
	{count:10, followers: 500},
	{count:12, followers: 600},
	{count:4, followers: 700},
	{count:6, followers: 800},
	{count:2, followers: 900},
	{count:0, followers: 1000},
	{count:0, followers: 1100},
	{count:0, followers: 1200},
	{count:1, followers: 1300},
	{count:19, followers: 1400},
	{count:22, followers: 1500},
	{count:18, followers: 1600},
	{count:36, followers: 1700},
	{count:65, followers: 1800},
	{count:47, followers: 1900},
	{count:25, followers: 2000},
	{count:0, followers: 2500},
	{count:0, followers: 3000},
	{count:1, followers: 4000},
	{count:2, followers: 5000},
	{count:1, followers: 10000},
	{count:8, followers: 20000},
	{count:12, followers: 30000},
	{count:3, followers: 40000},
	{count:11, followers: 50000},
	{count:0, followers: 75000},
	{count:22, followers: 100000},
	{count:0, followers: 125000},
	{count:18, followers: 150000},
	{count:31, followers: 200000},
	{count:26, followers: 250000},
	{count:38, followers: 500000},
	{count:43, followers: 750000},
	{count:28, followers: 1000000},
	{count:18, followers: 1500000},
	{count:67, followers: 2000000},
	{count:71, followers: 2500000},
	{count:54, followers: 5000000},
	{count:10, followers: 10000000},
	{count:8, followers: 15000000},
	{count:2, followers: 25000000},
	{count:10, followers: 35000000},
	{count:4, followers: 50000000},
	{count:9, followers: 100000000},
	{count:16, followers: 150000000},
	{count:2, followers: 200000000},
	{count:0, followers: 250000000},
]

function FollowerSelect(props) {

	const [fromFollower, setFromFollower] = useState(0)
	const [toFollower, setToFollower] = useState(50)
	const [minFollowers, setMinFollowers] = useState(BarData[0].followers)
	const [maxFollowers, setMaxFollowers] = useState(BarData[50].followers)

  	onChange = (e) => {
  		setFromFollower(e[0])
  		setToFollower(e[1])
  		setMinFollowers(BarData[e[0]].followers)
  		setMaxFollowers(BarData[e[1]].followers)
	}

	return (
		<FilterButtonWrapper>
			<FilterSelectWrapper position="right">
				<h3>Followers</h3>
				<p>The average follower count is 1.8m</p>
				<SliderContainer>
					<BarChart>
						{ BarData.map((data, index) =>{
							return(
								<Bar isInRange={fromFollower <= index && toFollower > index} height={data.count+'%'}/>
							)
						}) }
					</BarChart>
	      			<Range onChange={this.onChange} allowCross={false} min={0} max={50} defaultValue={[0, BarData.length]} tipFormatter={value => `${value}%`} />
	      		</SliderContainer>

      			<InputContainer>
      				<PriceInputWrapper>
      					<label>Min Followers</label>
	      				<PriceInput value={HRNumbers.toHumanString(minFollowers)}/>
      				</PriceInputWrapper>
      				<PriceInputWrapper>
      					<label>Max Followers</label>
	      				<PriceInput value={HRNumbers.toHumanString(maxFollowers)}/>
      				</PriceInputWrapper>
      			</InputContainer>
			</FilterSelectWrapper>
		</FilterButtonWrapper>
	)
}

export default FollowerSelect