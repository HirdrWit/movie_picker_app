import React from 'react';

class Header extends React.Component{
    render(){
        return <table className="titleBar">
        <tbody>
          <tr> 
            <td>
              {/* <img alt="app icon" width = "50" src = "logo.svg"/> */}
            </td>
            <td width="28"/>
            <td>
              <h2 style = {{marginTop : 0 }}>MovieSearch</h2> 
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default Header