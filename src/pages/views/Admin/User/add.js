import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const AddUser = props => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => AddUsser(data);


    let history = useHistory()
    const AddUsser = async (e) => {
        console.log(e)
        const data = await axios.post('http://localhost:3000/user', e);
        console.log(data);
        // debugger
        history.push('/admin/user')
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <h2 className="sidebar-brand-text mx-3">Thêm tài khoản</h2>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Tên tài khoản <span className="text-danger">*</span></label>
                    <input type="text" name="name" ref={register} className="form-control" id="exampleInputEmail1" placeholder="Vui lòng điền tên tài khoản" />
                </div>

                <div className="form-group">
                    <label htmlFor>Ảnh<span className="text-danger">*</span></label>
                    <input type="text" name="exampleRequired"
                        onchange="encodeImageFileAsURL(this)" className="form-control" name="image" ref={register} />
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phân quyền</label>
                    <select className="form-control" >
                        <option>Admin</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

AddUser.propTypes = {

}

export default AddUser
