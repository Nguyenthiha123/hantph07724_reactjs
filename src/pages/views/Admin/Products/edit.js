import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import api from '../../../../api/productApi';
import api1 from '../../../../api/categoryApi';
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

const EditProducts = props => {
    const { id } = useParams();
    const history = useHistory()
    const [product, setProduct] = useState({});
    const { register, handleSubmit, errors } = useForm();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await api.get(id);
                setProduct(data);
            } catch (error) {
            }
        }
        getProduct()
    }, []);

    //lấy danh mục
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


    const onHandleSubmit = async (data) => {
        const result = await axios.put(`http://localhost:3000/product/${id}`, data);
        console.log(result)
        history.push('/admin/product');
        Swal.fire(
            'Sửa thành công',
            'You clicked the button!',
            'success'
        )
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onHandleSubmit)}>
                <div className="form-group">
                    <h2 className="sidebar-brand-text mx-3">Sửa sản phẩm</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text" name="name" ref={register({ required: true, minLength: 3 })} defaultValue={product.name} className="form-control" id="exampleInputEmail1" placeholder="Vui lòng điền tên sản phẩm" />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Danh mục</label>
                    <select className="form-control" name="id_category" ref={register({ required: true })} >
                        {category && category.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                    <small className="form-text text-danger">
                        {errors.id_category && errors.id_category.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh</label>
                    <input type="text" name="image" ref={register({ required: true })} defaultValue={product.image} className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Giá</label>
                    <input type="number" name="price" ref={register({ required: true })} defaultValue={product.price} className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.price && errors.price.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor>Mô tả ngắn</label>
                    <textarea ref={register({ required: true })} name="content" defaultValue={product.content} className="form-control" rows={5} />
                    <small className="form-text text-danger">
                        {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}


EditProducts.propTypes = {

}

export default EditProducts
