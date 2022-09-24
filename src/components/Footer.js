import Dialog from './Dialog.js'
function Footer({ selectedValue, setSelectedValue, currencyData, setCurrencyData}) {
  return (
    <div className="footer">
        <div className="copyright">  <span> &copy;</span>2022   <span className='privacy'>· Privacy · Terms · Site</span></div>
        <div classname="choose-currency">
           <Dialog selectedValue={selectedValue} 
            setSelectedValue={setSelectedValue}
            currencyData={currencyData}
            setCurrencyData={setCurrencyData}/> 
        </div>
        
    </div>
  )
}

export default Footer