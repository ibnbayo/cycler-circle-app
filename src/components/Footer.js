import Dialog from './Dialog.js'
function Footer() {
  return (
    <div className="footer">
        <div className="copyright"> &copy; 2022 <span className='privacy'>· Privacy · Terms · Site</span></div>
        <div classname="choose-currency"> <Dialog /> </div>
        
    </div>
  )
}

export default Footer