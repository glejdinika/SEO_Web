<script>
 import background from '$lib/assets/pic1.jpg';

 let { data } = $props();

 const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(
   Number(price) || 0
  );
</script>

<svelte:head>
 <title>Nikos Electronic Webshop</title>
 <meta
  name="description"
  content="Explore our wide range of electronic devices, from smartphones to laptops, designed to enhance your digital experience."
 />
 <meta property="og:title" content="Electronic Devices Webshop" />
 <meta property="og:image" content={background} />
</svelte:head>

<div class="min-h-screen bg-slate-950 text-slate-100">
 <header class="relative overflow-hidden">
  <div
   class="absolute inset-0 bg-cover bg-center"
   style="background-image: url({background})"
  ></div>
  <div
   class="absolute inset-0 bg-linear-to-br from-slate-950/85 via-violet-950/65 to-amber-900/55"
  ></div>
  <div
   class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(196,181,253,0.28),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(251,191,36,0.22),transparent_45%)]"
  ></div>

  <div class="relative mx-auto flex h-80 max-w-6xl items-end px-4 pb-10 sm:h-96 sm:px-6 lg:px-8">
   <div>
    <p
    class="mb-3 inline-block rounded-full border border-violet-200/40 bg-violet-200/15 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-violet-50 backdrop-blur"
    >
     New Arrivals
    </p>
    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">Nikos Electronic Devices</h1>
    <p class="mt-3 max-w-xl text-sm text-violet-50/90 sm:text-base">
     Smart picks for work, play, and everything in between.
    </p>
   </div>
  </div>
 </header>

 <main class="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
   {#each data.products as product (product.id)}
    <article
     class="group rounded-3xl border border-violet-200/20 bg-slate-900/95 p-4 shadow-[0_12px_30px_-16px_rgba(0,0,0,0.55)] ring-1 ring-violet-100/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_-20px_rgba(91,33,182,0.5)]"
    >
     <a href={`/product/${product.slug}`} class="flex h-full flex-col">
      <img
       src={product.image_url}
       alt={product.name}
       class="aspect-4/3 w-full rounded-2xl object-cover transition duration-300 group-hover:scale-[1.02]"
      />
      <h2 class="mt-4 text-lg leading-tight font-semibold text-violet-50">{product.name}</h2>
      <p class="mt-2 line-clamp-3 text-sm text-slate-300">{product.description}</p>
      <p class="mt-4 text-2xl font-bold text-amber-300">{formatPrice(product.price)}</p>
      <button
       class="mt-4 w-full rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-amber-500"
      >
       Add to Cart
      </button>
     </a>
    </article>
   {/each}
  </div>
 </main>

 <footer
  class="border-t border-violet-200/15 bg-slate-950/95 py-8 text-center text-sm text-slate-400 backdrop-blur"
 >
  <p>© 2026 Electronic Devices Webshop. All rights belong to Niko.</p>
 </footer>
</div>
