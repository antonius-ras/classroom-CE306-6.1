
import './App.css'
import { ProductCard } from './ProductCard';


const products = [
  {
    id: 1,
    imageUrl: 'https://theness.com/neurologicablog/wp-content/uploads/sites/3/2020/04/crew-dragon.jpg',
    title: 'space x',
    description: 'ยานอวกาศ น้ำหนักเบาประหยัดน้ำมันสามารถเดินทางได้ไกลถึง 10 ปีแสง',
    price: 110000000000,
  },
  {
    id: 2,
    imageUrl: 'https://www.champthai.com/images/content/original-1649749392185.jpg',
    title: 'รถสามล้อแชมป์',
    description: 'ระบบขับเคลื่อนด้วยไฟฟ้า ปราศจากมลพิษ ไร้เสียง ไร้ควัน ไม่ใช้น้ำมัน กระบะเปิดได้ 3 ด้าน ขนย้ายสะดวก',
    price: 1999.99,
  },
  {
    id: 3,
    imageUrl: 'https://mpics.mgronline.com/pics/Images/564000001729501.JPEG',
    title: 'รถไฟ',
    description: 'รถไฟความเร็วสูง วิ่งด้วยความเร็วสูงสุด 300 กม./ชม. สะดวกสบาย ปลอดภัย และตรงเวลา',
    price: 49000.00,
  },
  {
    id: 4,
    imageUrl: 'https://www.bloggang.com/data/skyman/picture/1161612888.jpg',
    title: 'รถถัง',
    description: 'รถถังขนาดเบา เคลื่อนที่เร็ว ติดตั้งอาวุธครบครัน พร้อมลุยทุกสนามรบ',
    price: 49.99,
  },
  {
    id: 5,
    imageUrl: 'https://imgproc.airliners.net/photos/airliners/3/0/0/5390003.jpg?v=v44d12557cc0',
    title: 'f-16 แต่งซิ่ง',
    description: 'เครื่องบินขับไล่ขนาดเล็ก คล่องตัวสูง ติดอาวุธครบมือ พร้อมปฏิบัติการทุกสถานการณ์ บูมๆ',
    price: 999999.99,
  },
];


function App() {
  const handleAdd = (product: typeof products[0]) => {
    alert(`Added ${product.title} to cart!`);
  }

  return (


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.slice().map((p) => (
        <ProductCard
          key={`g-${p.id}`}
          imageUrl={p.imageUrl}
          title={p.title}
          description={p.description}
          price={p.price}
          onAddToCart={() => handleAdd(p)}
        />
      ))}
    </div>

  )
}

export default App;
