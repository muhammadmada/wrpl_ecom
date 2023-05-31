import footer from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={footer.foot}>
      <div className={footer.columns}>
        <div className={footer.column}>
          <div className={footer.content}>
            <h3>Tentang Tokopedia</h3>
            <ul>
              <li>
                <a href="https://www.tokopedia.com/about">Tentang Tokopedia</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/hak-kekayaan-intelektual">Hak Kekayaan Intelektual</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/karir">Karir</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/blog">Blog</a>
              </li>
              <li>
                <a href="https://www.bridestory.com">Bridestory</a>
              </li>
              <li>
                <a href="https://parents.tokopedia.com">Tokopedia Parents</a>
              </li>
              <li>
                <a href="https://mitra.tokopedia.com">Mitra Blog</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/affiliate">Tokopedia Affiliate Program</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/b2b">Tokopedia B2B Digital</a>
              </li>
            </ul>
          </div>
          <div className={footer.content}>
            <h3>Beli</h3>
            <ul>
              <li>
                <a href="https://www.tokopedia.com/tagihan-top-up">Tagihan & Top Up</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/tukar-tambah-handphone">Tukar Tambah Handphone</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/cod">Tokopedia COD</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footer.column}>
          <div className={footer.content}>
            <h3>Jual</h3>
            <ul>
              <li>
                <a href="https://www.tokopedia.com/pusat-edukasi-seller">Pusat Edukasi Seller</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/mitra-toppers">Mitra Toppers</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/daftar-official-store">Daftar Official Store</a>
              </li>
            </ul>
          </div>
          <div className={footer.content}>
            <h3>Bantuan dan Panduan</h3>
            <ul>
              <li>
                <a href="https://www.tokopedia.com/tokopedia-care">Tokopedia Care</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/syarat-dan-ketentuan">Syarat dan Ketentuan</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/kebijakan-privasi">Kebijakan Privasi</a>
              </li>
              <li>
                <a href="https://www.tokopedia.com/mitra">Mitra</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={footer.column}>
            <div className={footer.content}>
                <h3>Ikuti Kami</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
