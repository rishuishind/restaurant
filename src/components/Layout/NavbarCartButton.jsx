import { BsCart } from 'react-icons/bs'

const NavbarCartButton = (props) => {
    return (
        <div className='flex justify-center bg-black bg-opacity-30 p-5 w-[10vw] rounded-lg'>
            <BsCart className='text-white mt-1' />
            <span className='ml-2 text-white'>Your Cart</span>
            <span className='bg-amber-800 text-white ml-3 px-2 rounded-md'>0</span>
        </div>
    );
};

export default NavbarCartButton;