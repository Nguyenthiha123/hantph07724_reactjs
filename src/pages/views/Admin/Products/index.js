import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import axios from 'axios';
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi'
import Swal from 'sweetalert2'

const Products = props => {
    const [product, setproduct] = useState('')
    useEffect(async () => {
        const data = await axios.get('http://localhost:3000/product');
        data && setproduct(data.data);

    }, [])


    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api1.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);
    console.log(category)

    //xóa
    const deleteProduct = (id) => {
        const dataFilter = product.filter(el => el.id !== id)
        if (dataFilter) {
            setproduct(dataFilter);
            api.remove(id)
            Swal.fire(
                'Xóa thành công',
                'You clicked the button!',
                'success'
            )
        }
    }
    //list DL
    const listProduct = data => {
        if (data) {
            return data.map((el, index) => (
                <Fragment>
                    <tr key={index}>
                        <td>{el.id}</td>
                        <td>
                            {category && category.map(cate => cate.id == el.id_category ? cate.name : console.log(cate.id))}
                        </td>
                        <td>{el.name}</td>
                        <td>
                            <img style={{ width: "100px" }} src={el.image} />
                        </td>
                        <td>{el.price}</td>
                        <td style={{ width: "150px" }}>{el.content}</td>
                        <td>
                            <Link to={`/admin/product/edit/${el.id}`} type="button" className="btn btn-outline-info">Sửa</Link>
                            <button type="button" onClick={() => deleteProduct(el.id)} style={{ marginLeft: "10px" }} className="btn btn-outline-info">Xóa</button>
                            <Link to={`/admin/product/detail/${el.id}`} type="button" style={{ marginLeft: "10px" }} className="btn btn-outline-info">Chi tiết</Link>
                        </td>
                    </tr>
                </Fragment>
            ))
        }
    }

    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Sản phẩm</h2>
            <Link to="/admin/product/add" type="button" className="btn btn-outline-info" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Danh mục</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Ảnh</th>
                        <th scope="col">Giá</th>
                        <th scope="col">Mô tả ngắn</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>{product ? listProduct(product) : ''}</tbody>
            </table>
        </div>
    )
}

Products.propTypes = {

}

export default Products
