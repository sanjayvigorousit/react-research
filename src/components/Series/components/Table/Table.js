import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@material-ui/core";
import { Button } from "../../../../components/Wrappers";
import moment from 'moment';


export default function TableComponent(props) {
  let {data,offset,imageUrl,onRowClick}=props;
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          <TableCell >S. NO.</TableCell>
          <TableCell >Date</TableCell>
          <TableCell >PDF</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map((tempdata, index) => (
            <TableRow key={index}>
              <TableCell className="pl-3 fw-normal">{offset + index + 1}</TableCell>
              <TableCell>{moment(new Date(parseInt(tempdata.folderLocation))).utcOffset("+05:30").format("YYYY-MM-DD HH:mm:ss")}</TableCell>
              <TableCell >{tempdata.documents.map((doclink)=>
                (<p >
                <Button
                  color="success"
                  size="small"
                  className="px-2"
                  variant="contained"
                  style={{marginRight:'5px'}}
                  onClick={()=>onRowClick(imageUrl+''+tempdata.folderLocation+'/'+doclink)}
                >
                Show
              </Button>
              <Button
                  color="success"
                  size="small"
                  //className="px-2"
                  //variant="contained"
                  style={{marginRight:'5px'}}
                >
                <a download href={imageUrl+''+tempdata.folderLocation+'/'+doclink} style={{color:'white'}} >Download</a> 
              </Button>
              
                {doclink}
                </p>))
                }</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
}
