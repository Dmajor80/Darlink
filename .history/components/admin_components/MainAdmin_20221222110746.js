import React from 'react'

import InfoCard from './Card'
import Tables from './Table'

export default function Profile() {
  return (
    <>
      
      <main className='profile-page mx- '>
        {/* pages */}
        <div className='md:flex justify-between -mt-5 md:-mt-24 xl:w-5/6 my-  '>
          <div className=' ml-20 md:ml-0'>
            <h1 className='text-[#8BC940] font-bold text-5xl '>My Page</h1>
          </div>
        </div>
        <div className='grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 xl:w-5/6 '>
          <InfoCard title='Total Balance' value='6389'>
            {/* <RoundIcon
                icon={PeopleIcon}
                iconColorClass='text-orange-500 dark:text-orange-100'
                bgColorClass='bg-orange-100 dark:bg-orange-500'
                className='mr-4'
              /> */}
          </InfoCard>

          <InfoCard title='Account balance' value='$ 46,760.89'>
            {/* <RoundIcon
                icon={MoneyIcon}
                iconColorClass='text-green-500 dark:text-green-100'
                bgColorClass='bg-green-100 dark:bg-green-500'
                className='mr-4'
              /> */}
          </InfoCard>

          <InfoCard title='New sales' value='376'>
            {/* <RoundIcon
                icon={CartIcon}
                iconColorClass='text-blue-500 dark:text-blue-100'
                bgColorClass='bg-blue-100 dark:bg-blue-500'
                className='mr-4'
              /> */}
          </InfoCard>

          <InfoCard title='Pending contacts' value='35'>
            {/* <RoundIcon
                icon={ChatIcon}
                iconColorClass='text-teal-500 dark:text-teal-100'
                bgColorClass='bg-teal-100 dark:bg-teal-500'
                className='mr-4'
              /> */}
          </InfoCard>
        </div>
       

        <div className='md:w-5/6'>
          <Tables />
        </div>

        
      </main>
     
    </>
  )
}
