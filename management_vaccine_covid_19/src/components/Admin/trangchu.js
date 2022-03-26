import React, { useState } from "react";
import { FaUndo, FaPlusCircle, FaRegEdit, FaTrashAlt } from "react-icons/fa";
import "../../Style/Admin/quanlyvacxin.css"
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";

const Trangchu = (props) => {  


  return (
    <>
    <div className="container1">
      <h2 className="header-name1"> Quản lý vacxin </h2>
      <form method="post">


        <div className="form-input1">
         <div className="infomation-input1">
            <p>Mô tả :</p>
            <textarea 
              type="text" 
              placeholder="Mô tả"
              className="ma-input1 note-vacxin1" />
          </div>
          <div className="infomation-input1">
            <p>Mô tả :</p>
            <textarea 
              type="text" 
              placeholder="Mô tả"
              className="ma-input1 note-vacxin1" />
          </div>
          <div className="infomation-input1">
            <p>Mô tả :</p>
            <textarea 
              type="text" 
              placeholder="Mô tả"
              className="ma-input1 note-vacxin1" />
          </div>

        </div>
      

         {/* Button */}
         <div className="btn-vacxin1">
            <button className="reset-btn1 btn-format1">
              <FaUndo />
              <i className="text-btn1" >Nhập lại</i>
            </button>
            <button className="update-btn1 btn-format1" type="button">
              <FaPlusCircle />
              <i className="text-btn1" >Thêm mới</i>
            </button>
          </div>
      </form>
    
      <div className="table-vacxin1">
        <Table id="customer1">
          <thead>
            <tr>
              <th>STT</th>
              <th>Tiêu đề</th>
              <th>Conten</th>
              <th>Mô tả</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>             
              <td>Pfize</td>             
              <td>Mỹ</td>
              <td className="description">Vắc-xin COVID-19 của Pfizer–BioNTech (pINN: tozinameran), được bán với nhãn hiệu Comirnaty, là một loại vắc-xin COVID-19 dựa trên mRNA.</td>
              <td>
                <div className="action">
                  <button className="delete-btn">
                    <FaTrashAlt />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
    </>
  );
};
export default Trangchu;

