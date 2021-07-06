import healthcare from '../../Assets/video/healthcare.mp4'
const Product = () => {
    return ( 
    <div className="product">
        <div className="section">
            <div className="block">
                <h1>Products</h1>
                <h2>Health Care using AI</h2>
                <h2>Home Automation Using AI</h2>
                <h2>Face Mask Detection</h2>
                <h2>Face Recognisation</h2>
            </div>
            <div className="block">
            <video className='product-video' src={healthcare} autoPlay loop muted />
            </div>
        </div>
    </div> );
}
 
export default Product;