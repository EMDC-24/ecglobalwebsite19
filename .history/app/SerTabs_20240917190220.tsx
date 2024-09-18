import React from 'react'
import SimpleTab from './SimpleTab'

const tabdata = [
{dkey: 'tab1', title: 'Tab 1', content: 'Tab 1 content'},
{dkey: 'tab2', title: 'Tab 2', content: 'Tab 1 content'},
{dkey: 'tab3', title: 'Tab 3', content: 'Tab 1 content'},
{dkey: 'tab4', title: 'Tab 4', content: 'Tab 1 content'},
]

const SerTabs = () => {
  return (
    <div>
        <SimpleTab tabdata={tabdata} />
    </div>
  )
}

export default SerTabs