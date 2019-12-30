import React,{Component} from 'react';


    const TransferList=({transfers})=>{
      return  <div>
        <table className="table table-striped">
        <tbody>
            {transfers.map((transfer)=>(
            <tr key={transfer.id}>
                 <td>
                    {transfer.description}
                 </td>
                <td className={transfer.amount >0 ? 'text-success' : 'text-danger'}>
                    {transfer.amount}
                </td>
            </tr>

            ))}
            
        </tbody>
      </table>
      </div>
    }
    
           
export default TransferList