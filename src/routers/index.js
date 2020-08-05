import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
//Category
import Category from '../pages/views/Admin/Category'
import AddCategory from '../pages/views/Admin/Category/add'
import EditCategory from '../pages/views/Admin/Category/edit'
//Products
import Products from '../pages/views/Admin/Products'
import AddProducts from '../pages/views/Admin/Products/add'
import EditProducts from '../pages/views/Admin/Products/edit'
import DetailProducts from '../pages/views/Admin/Products/detail'
//User
import User from '../pages/views/Admin/User'
import AddUser from '../pages/views/Admin/User/add'
//checkOut
import CheckOut from '../pages/views/Admin/CheckOut'
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Shop from '../pages/views/Main/Shop'
import Contact from '../pages/views/Main/Contact'
import Detail from '../pages/views/Main/Detail'
import Cart from '../pages/views/Main/Cart'





const Routers = ({ products, onRemove }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Route path='/admin' exact>
                            <Dashboard />
                        </Route>
                        {/* Category */}
                        <Route path='/admin/category' exact>
                            <Category />
                        </Route>
                        <Route path='/admin/category/add' exact>
                            <AddCategory />
                        </Route>
                        <Route path='/admin/category/edit/:id' exact>
                            <EditCategory />
                        </Route>

                        {/* Product */}
                        <Route path='/admin/product' exact>
                            <Products />
                        </Route>
                        <Route path='/admin/product/add'>
                            add
                            {/* < AddProducts /> */}
                        </Route>
                        <Route path='/admin/product/edit/:id' exact>
                            < EditProducts />
                        </Route>
                        <Route path='/admin/product/detail' exact>
                            < DetailProducts />
                        </Route>

                        {/* User */}
                        <Route path='/admin/user' exact>
                            <User />
                        </Route>
                        <Route path='/admin/user/add' exact>
                            <AddUser />
                        </Route>

                        {/* checkOut */}
                        <Route path='/admin/checkOut' exact>
                            <CheckOut />
                        </Route>
                    </LayoutAdmin>

                </Route>

                <Route path="/:path?/:path?/" exact>
                    <LayoutMain>

                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="about" exact>
                            <About />
                        </Route>
                        <Route path="/shop" exact>
                            <Shop />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="/detail/:id" exact>
                            <Detail />
                        </Route>
                        <Route path="/cart" exact>
                            <Cart />
                        </Route>

                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}
Routers.propTypes = {

}

export default Routers
