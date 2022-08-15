<template>
  <main>
    <section class="nav_mask">
      <div class="container mx-auto px-3">
        <h1 class="title">Bu yerda yangiliklar maqolasini nomi bo'ladi</h1>
        <p class="data postdata">JULY 29, 2022</p>
        <p class="from postdata">FIRM MEMORANDA</p>
      </div>
    </section>
    <section>
      <div class="container mx-auto px-3 py-10">
        <p class="max-w-lg text-bgdarkblue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim nemo,
          adipisci sapiente velit odit unde magnam placeat veritatis quae voluptates aut
          quam quia ipsum deleniti laborum aliquid illo in sint porro repellat vero at
          eveniet. Esse dolore sequi atque corrupti illo qui, sint deleniti officiis
          voluptatibus itaque eius iure cum ducimus alias ex minus dolorem excepturi ipsum
          labore iste cupiditate vitae? Saepe, incidunt debitis consectetur quasi atque
          voluptate dolorem laborum aliquid quas? Ipsam atque modi autem dolore mollitia
          doloremque explicabo consequuntur expedita itaque assumenda, eius recusandae
          quis. Id, tempora similique. Explicabo enim architecto eligendi laudantium
          repudiandae. Voluptas temporibus eveniet, modi hic voluptates laudantium id
          asperiores, delectus enim explicabo, recusandae dolor itaque magnam.
        </p>
        <h2 class="text-bgdarkblue my-7">Lorem ipsum dolor sit amet.</h2>
        <p class="max-w-lg text-bgdarkblue">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos enim nemo,
          adipisci sapiente velit odit unde magnam placeat veritatis quae voluptates aut
          quam quia ipsum deleniti laborum aliquid illo in sint porro repellat vero at
          eveniet. Esse dolore sequi atque corrupti illo qui, sint deleniti officiis
          voluptatibus itaque eius iure cum ducimus alias ex minus dolorem excepturi ipsum
          labore iste cupiditate vitae? Saepe, incidunt debitis consectetur quasi atque
          voluptate dolorem laborum aliquid quas? Ipsam atque modi autem dolore mollitia
          doloremque explicabo consequuntur expedita itaque assumenda, eius recusandae
          quis. Id, tempora similique. Explicabo enim architecto eligendi laudantium
          repudiandae. Voluptas temporibus eveniet, modi hic voluptates laudantium id
          asperiores, delectus enim explicabo, recusandae dolor itaque magnam.
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
section.nav_mask {
  background-image: url("@/assets/img/header-bgfull.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;
  @media (max-width: 991.98px) {
    padding: 120px 0px 40px;
    min-height: 400px;
  }
}
p {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.45;
}
h2 {
  font-size: calc(18px + 0 * ((100vw - 350px) / 850));
  font-weight: bold;
}
h1 {
  margin-bottom: 20px;
  letter-spacing: 0;
  word-spacing: 0.2px;
  font-weight: 300;
  line-height: 48px;
  color: #ffffff;
  font-size: calc(38px + 7 * ((100vw - 350px) / 850));
}
p.postdata {
  color: #b6b6b6;
  font-weight: 900;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
  font-size: 12px;
}
</style>
