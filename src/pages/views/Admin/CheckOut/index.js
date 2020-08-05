import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CheckOut = props => {
    return (
        <div className="container">
            <h2 className="sidebar-brand-text mx-3">Giỏ hàng</h2>
            <Link to="" type="button" class="btn btn-outline-info" > Thêm</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Tên tài khoản</th>
                        <th scope="col">Tên sản phẩm</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col">Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Mark</td>
                        <td>
                            <button type="button" class="btn btn-outline-info">Xóa</button>
                        </td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}

CheckOut.propTypes = {

}

export default CheckOut
