import './banner.css';

const Banner = (props) => {

    const title = props.title;
    const input_type = props.input_type;
    const input_cln = props.input_cln;
    const input_plc = props.input_plc;
    const btn_value = props.btn_value;
    const banner_img = props.banner_img;
    const link = props.link


    return (
        <div className = 'banner-core'>
            <div className = 'banner-left'>
                <h1 className = 'banner-title'>{ title }</h1>
                <a href = {link} >
                    <input type = { input_type } placeholder = { input_plc } className = { input_cln }  value = { btn_value }  />
                </a>
            </div>
            <img src = { banner_img } className = 'banner-fg-img' alt = 'banner' />
        </div>
    )
}

export default Banner;