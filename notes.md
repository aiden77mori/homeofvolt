# GENERAL

* Vercel's default deployment uses NPM, so I've deleted the yarn lock and used NPM install to install the packages.
* Change CompanyService.tsx to take the full item path: iconSrc={service.iconSrc} not iconSrc={`/assets/icons/${service.iconSrc}.svg`} 

# TAILWIND and styling

Try to get rid of all the property-[value] classes. Do a find all for "-[" and see if you can replace them with Tailwind's defaults, or extend tailwind.config.js

* You can replace rounded-[5px] with rounded-md (no one will notice the difference between 5px and 6px of rounding)
* extend the {colors} bit of tailwind.config.js and then put all the colours in there, then you can replace bg-[#B2FCE4] with bg-whateverYouCalledIt
* Setting maximum heights of components is generally a bad idea as any content can overflow its parent. Instead use padding around the content to push the parent out (eg. In /modules/Home/ContactUs.tsx, the Contact Us component over the map.)
* The map is starting to repeat and at smaller sizes the center (where the location is) goes off the page... I do background images like this:
```
<div className='relative'> //the container that has the bg image
  {the content goes here}  //whatever goes in the container
  <div className='absolute top-0 left-0 h-full w-full -z-10'> //the bg image wrapper with negative z index so it's behind the content
    <Image src='/path/to/bgImage' layout='fill' objectFit='cover' alt='Whatever The Alt Is' />  //the bg image
  </div>
<div>
```
* For the contact icons, you don't need to set height and width on the span because the image size is defined. Personally I like doing it like this:
```
  <div className='h-9 aspect-square relative'>
    <Image src="/path/to/icon" layout='fill' objectFit='contain' alt='Whatever the alt is" />
  </div>
```

# new notes 16 May

(please note that I'm getting nit-picky, which means there aren't big things that need fixing. Having said that, a few of these are in the notes above...)

* Change CompanyService.tsx to take the full item path: iconSrc={service.iconSrc} not iconSrc={`/assets/icons/${service.iconSrc}.svg`} 
* Try to get rid of all the property-[value] classes. <b>Do a find all for "-["</b> and see if you can replace them with Tailwind's defaults, or extend tailwind.config.js
* * put all the colours into tailwind.config.js, then call them. Eg. Replace bg-[#B2FCE4] with bg-afterPay in Subscribe.tsx
* * replace the rounded-[3px] in Button.tsx with rounded-sm (which gives 2px). If you really need 3px, extend tailwind.config.js
* * You've used w-[22%] a few times... put it in tailwind.config.js
* * In BrandCarousel you've used top-[50%] and -translate-y-[50%]... use top-1/2 and -translate-y-1/2 instead.