import React from 'react';
import style from './StudentsTable.module.css';
import TextField from '@material-ui/core/TextField';

const StudentsTable = () => {
    return(
        <table className={style.table}>
            <tr>
                <td className={style.tableData}><b>№</b></td>
                <td className={style.tableData}><b>Фамилия</b></td>
                <td className={style.tableData}><b>Имя</b></td>
                <td className={style.tableData}><b>Номер группы</b></td>
                <td className={style.tableData}><b>Посещаемость</b></td>
                <td className={style.tableData}><b>Домашние работы</b></td>
            </tr>
            <tr>
                <td className={style.tableData}>1</td>
                <td className={style.tableData}>Степанов</td>
                <td className={style.tableData}>Петр</td>
                <td className={style.tableData}>693</td>
                <td className={style.tableData}>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </td>
                <td className={style.tableData}>
                    <a href="https://github.com/">Задание 1</a>
                    <div>
                        <a href="https://github.com/">Задание 2</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td className={style.tableData}>2</td>
                <td className={style.tableData}>Мокроусов</td>
                <td className={style.tableData}>Павел</td>
                <td className={style.tableData}>692</td>
                <td className={style.tableData}>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </td>
                <td className={style.tableData}></td>
            </tr>
            <tr>
                <td className={style.tableData}>3</td>
                <td className={style.tableData}>Талец</td>
                <td className={style.tableData}>Михаил</td>
                <td className={style.tableData}>591</td>
                <td className={style.tableData}>
                    <TextField
                        id="standard-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </td>
                <td className={style.tableData}>
                    <a href="https://github.com/">Задание 1</a>
                </td>
            </tr>
        </table>
    );
};

export default StudentsTable;
