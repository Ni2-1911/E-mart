import React from 'react'
import Item from '../Items/Item';
import Filter from '../Filter/Filter';
export default function ItemLayout(props) {
  const [filterData,setFilterData] = React.useState([])
  function SetDataForFilter(data){
    setFilterData(data);
    console.log(data);
  }
  return (
    <>
    <div >
    <Filter setFilterData={SetDataForFilter} />
    <Item BadgeData={props.functionToSetCartSize} 
    DataToFetch={filterData}/>
    </div>
    </>
  )
}
