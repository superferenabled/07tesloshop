import {Link} from "react-router";


export const CustomLogo = () => {
    return (
        <Link to='/' className='flex items-center whitespace-nowrap'>
            <span className='font-montserrat font-bold text-xl m-0 whitespace-nowrap'>
                Teslo |
            </span>
            <p className='text-muted-foreground px-2 m-0 whitespace-nowrap'>
                Shop
            </p>
        </Link>
    );
};
