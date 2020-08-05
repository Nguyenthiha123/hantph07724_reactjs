import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import api from '../../../../api/productApi'
import api1 from '../../../../api/categoryApi'
import Swal from 'sweetalert2'

const AddProducts = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => AddProduct(data);


    let history = useHistory()
    const AddProduct = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:3000/product', e);
        console.log(data);
        // debugger
        history.push('/admin/product')
        Swal.fire(
            'Thêm thành công',
            'You clicked the button!',
            'success'
        )
    }

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
    console.log(category)




    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h2 className="sidebar-brand-text mx-3">Thêm sản phẩm</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                    <input type="text" ref={register({ required: true, minLength: 3 })} name="name" className="form-control" id="exampleInputEmail1" placeholder="Vui lòng điền tên sản phẩm" />
                    <small className="form-text text-danger">
                        {errors.name && errors.name.type === "required" && <span>Vui lòng không để trống</span>}
                        {errors.name && errors.name.type === "minLength" && <span>Tên phải lớn hơn hoặc bằng 3 ký tự</span>}
                    </small>
                </div>


                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Danh mục</label>
                    <select class="form-control" name="id_category" ref={register({ required: true })} id="">
                        {category && category.map(cate =>
                            <option value={cate.id}>{cate.name}</option>
                        )}
                    </select>
                    <small className="form-text text-danger">
                        {errors.id_categorye && errors.id_category.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Ảnh</label>
                    <input type="text" name="image" ref={register({ required: true })} className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.image && errors.image.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Giá</label>
                    <input type="number" name="price" ref={register({ required: true })} className="form-control" id="exampleInputEmail1" />
                    <small className="form-text text-danger">
                        {errors.price && errors.price.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor>Mô tả ngắn</label>
                    <textarea ref={register({ required: true })} name="content" className="form-control" rows={5} defaultValue={""} />
                    <small className="form-text text-danger">
                        {errors.content && errors.content.type === "required" && <span>Vui lòng không để trống</span>}
                    </small>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >

    )
}


AddProducts.propTypes = {

}

export default AddProducts
