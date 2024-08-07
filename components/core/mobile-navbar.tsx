'use client'
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu as MenuIcon } from 'lucide-react';

const mobileItems = ['A', 'B', 'C'];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex sticky z-[99] md:hidden top-0 right-0 left-0 items-center justify-between px-4 py-2 bg-white/5 backdrop-blur-sm rounded-b-2xl'>
        <div className='flex items-center'>LOGO_ <span>GO</span></div>
<Sheet open={open} onOpenChange={setOpen}>

<SheetTrigger asChild>
  <Button variant="ghost" size="icon" >
    <MenuIcon />
  </Button>
</SheetTrigger>

<SheetContent side="right" className='overflow-hidden z-[100]'> 
  <div className="flex flex-col items-start">
    {mobileItems.map((item, index) => (
      <Button
        key={index}
        variant="link"
        onClick={() => {
          setOpen(false);
        }}
      >
        {item}
      </Button>
    ))}
  </div>
</SheetContent>

</Sheet>
    </nav>
   
  );
}