
import { useRef, useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

export default function Add() {
    const [value, setValue] = useState({
        pid: "",
        chestxray: "",
        filmno: "",
        comment: "",
        conclusion: "",
        registerdby: "",
        updatedby: ""
    });
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState(null);
    const CloseRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/patient/get');
                console.log(response.data); 
                const options = Array.isArray(response.data)
                    ? response.data.map(option => ({
                        value: option._id,
                        label: `${option.fname} ${option.mname} ${option.lname}`
                    }))
                    : [];
                setDropdownOptions(options);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleOnChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
            pid: selectedOptions ? selectedOptions.value : ""
        });
    };

    const handleSelectChange = (selectedOption) => {
        setSelectedOptions(selectedOption);
        setValue({
            ...value,
            pid: selectedOption ? selectedOption.value : ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/xray/create', value);
            if (response.data.success) {
                toast.success(response.data.Message);
                CloseRef.current.click();
                window.location.reload();
               
                Navigate('/Xray');
            }
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div id="addEmployeeModal" className="modal fade">
            <div className="modal-dialog modal-sm" style={{ maxWidth: '800px' }} role="document">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header">
                            <h4 className="modal-title"> X-ray Report</h4>
                            <button
                                type="button"
                                className="close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                                ref={CloseRef}
                            >
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Patient Id</label>
                                <div className="col-sm-10">
                                    <Select
                                        name="pid"
                                        value={selectedOptions}
                                        onChange={handleSelectChange}
                                        options={dropdownOptions}
                                        isClearable
                                        hideSelectedOptions={false}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="col-sm-10">
                                    <div className="input-group">
                                        <div className="input-group-item">
                                            <label className="col-form-label">Chest X-ray</label>
                                            <input
                                                type="text"
                                                value={value.chestxray}
                                                name="chestxray"
                                                onChange={handleOnChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="input-group-item">
                                            <label className="col-form-label">Film No</label>
                                            <input
                                                type="text"
                                                value={value.filmno}
                                                name="filmno"
                                                onChange={handleOnChange}
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Comment</label>
                                <div className="col-sm-10">
                                    <textarea
                                        value={value.comment}
                                        name="comment"
                                        className="form-control"
                                        onChange={handleOnChange}
                                        rows="10"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="form-group row">
    <label className="col-sm-2 col-form-label">Conclusion</label>
    <div className="col-sm-10">
        <div className="custom-radio-group">
            <label className={`custom-radio ${value.conclusion === 'Fit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="fit"
                    name="conclusion"
                    value="Fit"
                    checked={value.conclusion === 'Fit'}
                    onChange={handleOnChange}
                />
                <span className="custom-radio-label">Fit</span>
            </label>
            <label className={`custom-radio ${value.conclusion === 'Unfit' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="unfit"
                    name="conclusion"
                    value="Unfit"
                    checked={value.conclusion === 'Unfit'}
                    onChange={handleOnChange}
                />
                <span className="custom-radio-label">Unfit</span>
            </label>
            <label className={`custom-radio ${value.conclusion === 'Pending' ? 'selected' : ''}`}>
                <input
                    type="radio"
                    id="pending"
                    name="conclusion"
                    value="Pending"
                    checked={value.conclusion === 'Pending'}
                    onChange={handleOnChange}
                />
                <span className="custom-radio-label">Pending</span>
            </label>
        </div>
    </div>
</div>

                            <div className="form-group row">
    <div className="col-sm-10">
        <div className="input-group">
            <div className="input-group-item">
                <label className="col-form-label">Registered By</label>
                <input
                    type="text"
                    value={value.registerdby}
                    name="registerdby"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                />
            </div>
            <div className="input-group-item">
                <label className="col-form-label">Updated By</label>
                <input
                    type="text"
                    value={value.updatedby}
                    name="updatedby"
                    onChange={handleOnChange}
                    className="form-control"
                    required
                />
            </div>
        </div>
    </div>
</div>


                              
                     
                               
                              
                               
                               </div>
                        <div className="modal-footer">
                            <input type="button" className="btn btn-default" data-bs-dismiss="modal" value="Cancel" />
                            <input type="submit" className="btn btn-primary" value="Add" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
