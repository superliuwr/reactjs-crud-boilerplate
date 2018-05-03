import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const nameFormatter = (cell, row) => {
  return `<a href=${row.url} target="_blank">${cell}</a>`;
};



class CourseList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true, 
            hideSelectColumn: true            
        };
    }



    render() {


        return (
            <BootstrapTable data={this.props.courses}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>
                
                <TableHeaderColumn 
                    dataField="name"
                    dataFormat={nameFormatter} 
                    dataSort={true}
                    caretRender={getCaret}
                    //filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Name
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="description"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Description
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="adImageUrl"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Ad Image URL
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="rate"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Rate
                </TableHeaderColumn>

                <TableHeaderColumn 
                    dataField="category"
                    dataSort={true}
                    caretRender={getCaret}
                    //filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Category
                </TableHeaderColumn>  

                <TableHeaderColumn 
                    dataField="contact"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Contact
                </TableHeaderColumn> 

                <TableHeaderColumn 
                    dataField="enabled"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Enabled
                </TableHeaderColumn> 

                <TableHeaderColumn 
                    dataField="count"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Click Count
                </TableHeaderColumn>                                
            </BootstrapTable>
        );
    }

}



CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default CourseList;
