import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import api from '../../../../api/categoryApi'
import Swal from 'sweetalert2'

const Category = props => {
    const [category, setCategory] = useState('')
    useEffect(() => {
        const getCategory = async () => {
            try {
                const { data } = await api.getAll();
                setCategory(data);
            } catch (error) {
            }
        }
        getCategory()
    }, []);

    //xóa sản phẩm
    const deleteCategory = (id) => {
        const dataFilter = category.filter(el => el.id !== id)
        if (dataFilter) {
            setCategory(dataFilter);
            const remove = api.remove(id)
            console.log(remove)
            Swal.fire(
                'Xóa thành công',
                'You clicked the button!',
                'success'
            )
        }
        console.log(id);

    }
    //list dữ liệu
    const listCategory = data => {
        if (data) {
            return data.map((el, index) => (
                <tr key={index}>
                    <td>{el.id}</td>
                    <td>{el.name}</td>
                    <td>
                        <Link to={`/admin/category/edit/${el.id}`} type="button" class="btn btn-outline-info">Sửa</Link>
                        <button style={{ marginLeft: "10px" }} onClick={() => deleteCategory(el.id)} type="button" class="btn btn-outline-info">Xóa</button>
                    </td>
                </tr>

            ))
        }
    }
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Danh mục</h2>
            <Link to="/admin/category/add" type="button" class="btn btn-outline-info" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {category ? listCategory(category) : ''}

                </tbody>
            </table>

        </div>
    )
}

Category.propTypes = {

}

export default Category
