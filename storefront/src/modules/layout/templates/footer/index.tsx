import FooterCTA from "@modules/layout/components/footer-cta"
import FooterNav from "@modules/layout/components/footer-nav"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import { Banner } from "../banner"
import ProductByDiscount from "@modules/layout/components/productbydiscount"
import ProductSlider from "@modules/layout/components/productslider/pages"



const Footer = () => {
  return (
    <footer>
      <ProductSlider/>
   <Banner/>
      <FooterCTA />
      <ProductByDiscount/>
      <FooterNav />
      <MedusaCTA />
    </footer>
  )
}

export default Footer
