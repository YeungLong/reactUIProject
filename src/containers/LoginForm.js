import React from "react";
import PropTypes from "prop-types";
import { Button, Form, Input } from "antd";
import QueueAnim from 'rc-queue-anim';
import Login from "./Login";

const FormItem = Form.Item;
const LoginForm = ({loading, onOk, from: { getFieldDerocetor, validateFieldsAndScroll}}) => {
    function handleOk(e) {
        e.preventDefault();
    }

    return (
        <div>

        </div>
    )
}

Login.propTypes = {
    loading: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    form: PropTypes.object.isRequired
}

export default Form.create(LoginForms)