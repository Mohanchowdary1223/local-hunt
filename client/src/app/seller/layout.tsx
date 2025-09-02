import SellerHeader from "@/components/layouts/SellerHeader";


export default function UserLayout({ children } : {children : React.ReactNode}) {
  return (
    <>
      <SellerHeader/>
      {children}
    </>
  )
}