import Dialog from './Dialog.js'
function Footer() {
  return (
    <div className="footer">
        <div className="copyright"> &copy; 2022 · Privacy · Terms · Site</div>
        <div classname="choose-currency"> <button>{"$ USD"}</button></div>
        <Dialog />
    </div>
  )
}

export default Footer