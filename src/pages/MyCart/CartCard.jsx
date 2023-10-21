
import Swal from 'sweetalert2';

const CartCard = ({ product, cartProducts, setCartProducts }) => {

    const { _id, image, title, price, rating, details, type, brandName } = product;

    const handleDelete = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {

                fetch(`https://asn-flavour-brust-10-server-mpkg126i6.vercel.app/products/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remainingProduct = cartProducts?.filter(item => item._id != _id)
                            setCartProducts(remainingProduct)
                            console.log(remainingProduct);
                        }

                    })
                    .catch(err => {
                        console.log(err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Opps... Failed !!',
                            text: `${err.message}`,
                            confirmButtonText: "Continue"
                            // showConfirmButton: false,
                            // timer: 2000
                        })
                    })
            }

        })
        console.log(cartProducts);

    }

    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex border border-gray-200 py-4">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-contain bg-center bg-no-repeat py-4 rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{ backgroundImage: `url(${image})` }} title="Woman holding a mug">
            </div>
            {/* <img src={image} className='p-4 h-1/2' alt="" /> */}
            <div className="rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-lg text-title-secondary flex items-center">
                        {brandName}
                    </p>
                    <div className="text-title-primary font-bold text-2xl mb-2">{title}</div>
                    <p className="text-text-primary text-base">{details}</p>
                </div>
                <div className="flex items-center gap-8">
                    <p className="text-lg text-title-secondary font-bold capitalize">Category: {type}</p>
                    <p className="text-2xl text-title-secondary font-bold">${price}</p>
                </div>
                <button
                    onClick={handleDelete}
                    className="btn bg-red-500 w-fit text-white rounded-full border-0 h-fit min-h-fit px-6 py-1 font-bold text-base hover:bg-title-secondary capitalize mt-4">Delete</button>
            </div>
        </div>
    );
};

export default CartCard;