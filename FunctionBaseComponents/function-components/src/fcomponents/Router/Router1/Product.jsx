import { useParams, useNavigate, redirect } from "react-router-dom"


const Product = () => {
    const { pid } = useParams();
    const navigation = useNavigate();
    return (
        <div>Product no: {pid}
            <button style={{ width: 300, height: 300, backgroundColor: 'red' }} onClick={() => {
                navigation(-1)
            }}>Bac</button>
        </div>

    )
}

export default Product