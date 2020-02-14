import React, {useEffect, useState} from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const createSliderWithTooltip = Slider.createSliderWithTooltip
const Range = createSliderWithTooltip(Slider.Range)

import {
	FilterSelectOverlay,
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
import TagIcon from '../../icons/tag'

const BarData = [
	{count:0, price: 5},
	{count:0, price: 10},
	{count:0, price: 15},
	{count:1, price: 20},
	{count:2, price: 25},
	{count:1, price: 30},
	{count:8, price: 35},
	{count:11, price: 40},
	{count:22, price: 45},
	{count:18, price: 50},
	{count:31, price: 55},
	{count:26, price: 60},
	{count:38, price: 65},
	{count:43, price: 70},
	{count:28, price: 75},
	{count:18, price: 80},
	{count:67, price: 85},
	{count:71, price: 90},
	{count:54, price: 95},
	{count:10, price: 100},
	{count:8, price: 105},
	{count:2, price: 110},
	{count:10, price: 115},
	{count:4, price: 120},
	{count:9, price: 125},
	{count:16, price: 130},
	{count:2, price: 135},
	{count:0, price: 140},
	{count:0, price: 145},
	{count:0, price: 150},
	{count:2, price: 155},
	{count:5, price: 160},
	{count:10, price: 165},
	{count:12, price: 170},
	{count:4, price: 175},
	{count:6, price: 185},
	{count:2, price: 190},
	{count:0, price: 195},
	{count:0, price: 200},
	{count:1, price: 205},
	{count:19, price: 210},
	{count:22, price: 215},
	{count:18, price: 220},
	{count:36, price: 225},
	{count:65, price: 230},
	{count:47, price: 235},
	{count:25, price: 240},
	{count:12, price: 245},
	{count:3, price: 255},
	{count:0, price: 260},
	{count:0, price: 260},
]

function PriceSlider (props) {

  	onChange = (e) => {
  		setFrom(e[0])
  		setTo(e[1])
  		setMinPrice(BarData[e[0]].price)
  		setMaxPrice(BarData[e[1]].price)
	}

	const [from, setFrom] = useState(BarData[0].price)
	const [to, setTo] = useState(BarData[49].price)
	const [minPrice, setMinPrice] = useState(BarData[0].price)
	const [maxPrice, setMaxPrice] = useState(BarData[49].price)

	return (
		<FilterButtonWrapper>
			<FilterSelectWrapper>
				<h3>Price</h3>
				<p>The average {props.type} price is $93 USD</p>
				<SliderContainer>
					<BarChart>
						{ BarData.map((data, index) =>{
							return(
								<Bar isInRange={from <= index && to > index} height={data.count+'%'}/>
							)
						}) }
					</BarChart>
	      			<Range onChange={this.onChange} allowCross={false} min={0} max={50} defaultValue={[from, to]} tipFormatter={value => `${value}%`} />
	      		</SliderContainer>
      			<InputContainer>
      				<PriceInputWrapper>
      					<label>Min Price</label>
      					<label>$</label>
	      				<PriceInput value={minPrice}/>
      				</PriceInputWrapper>
      				<PriceInputWrapper>
      					<label>Max Price</label>
      					<label>$</label>
	      				<PriceInput value={maxPrice}/>
      				</PriceInputWrapper>
      			</InputContainer>
			</FilterSelectWrapper>
		</FilterButtonWrapper>
	)
}
export default PriceSlider

