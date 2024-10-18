import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsým-bul jaı ǵana baspa jáne terý ındýstrıasynyń jalǵan mátini. Lorem Ipsým 1500-shi jyldardan bastap salanyń standartty jalǵan mátini boldy, sol kezde belgisiz prınter tıpti gallereıany alyp, ony tıptik úlgiler kitabyn jasaý úshin aralastyrdy.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>KOMPANIA</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Basty bet</li>
            <li>Biz týraly</li>
            <li>Jetkizý</li>
            <li>Qupıalylyq saıasaty</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>BIZBEN HABARLASYŃYZ</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+7-747-234-60-23</li>
            <li>meirambeknurai@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Avtorlyq Quqyq 2024 @ Prescripto.com -Jaqsy Saqtalǵan.</p>
      </div>

    </div>
  )
}

export default Footer
