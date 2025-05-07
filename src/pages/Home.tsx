const Home = () => {

    let canvas = document.querySelector("#exampleCanvas")

    console.log(canvas);

    return <>
        <section className="relative z-0">
            <div className="flex flex-row max-w-[1220px] mx-auto w-full">
                <div className="    ">
                    <picture>
                        <img className="mx-auto max-w-1/2 w-full" src="/src/assets/images/mine.png" alt="Mine" width="1666" height="5011" />
                    </picture>
                </div>
                <div className="py-32 pr-32">
                    <h1 className="text-graphite text-end dark:text-white text-5xl">Guillermo Jiménez Montes</h1>
                    <h2 className="text-bright-brick text-end text-2xl">Desarrollador Frontend</h2>
                    <p className="text-graphite text-end dark:text-white text-[18px] my-12">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien
                        vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                        Tempus leo eu aenean sed diam urna tempor.  Pulvinar vivamus fringilla lacus nec metus
                        bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc
                        posuere. Ut hendrerit semper class aptent taciti sociosqu. Ad litora torquent per
                        conubia nostra inceptos himenaeos
                    </p>
                    <ul className="flex flex-row gap-6">
                        <li>
                            <a className="text-white" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"/></svg>
                            </a>
                        </li>
                        <li>
                            <a className="text-white" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"/></svg>
                            </a>
                        </li>
                        <li>
                            <a className="text-white" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16.42v3.536a1 1 0 0 1-.93.998Q19.415 21 19 21C10.163 21 3 13.837 3 5q0-.414.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45q.034.344.064.552A13.9 13.9 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.05 13.05 0 0 0 6.844 6.844l1.54-2.154a.46.46 0 0 1 .573-.149a13.9 13.9 0 0 0 4 1.205q.208.03.55.064a.5.5 0 0 1 .449.498"/></svg>
                            </a>
                        </li>
                        <li>
                            <a className="text-white" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m9.06 8.683L5.648 6.238L4.353 7.762l7.72 6.555l7.581-6.56l-1.308-1.513z"/></svg>
                            </a>
                        </li>
                        <li className="border-l-2 border-white"></li>
                        <li>
                            <a className="text-white" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.999 2A.995.995 0 0 0 3 2.992v18.016a1 1 0 0 0 .993.992h16.014A1 1 0 0 0 21 20.992V7l-5-5zM10.5 7.5h2c0 2.49 2.144 5.16 4.816 6.051l-.457 1.939c-3.136-.448-6.377.89-9.304 2.842l-1.18-1.613c1.086-.869 2.128-2.343 2.9-4.066c.77-1.716 1.225-3.576 1.225-5.153m.6 5.972c.267-.597.504-1.216.704-1.843a9.7 9.7 0 0 0 1.706 1.966c-.982.176-1.943.465-2.875.833q.247-.471.465-.956"/></svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <svg className="absolute w-full h-full z-0" xmlns="http://www.w3.org/2000/svg" width="2350.551" height="1179.063" viewBox="0 0 2350.551 1179.063">
            <g id="Grupo_10" data-name="Grupo 10" transform="translate(406.29 -143.561)">
                <path id="Trazado_27" data-name="Trazado 27" d="M-1948,1149.993s228.884-206.852,483.21-120.381,249.24-384.88,618.861-218.721,237.371-50.865,529-174.637S-11.739,212.377-11.739,212.377v952.876L-1948,1149.993" transform="translate(1938 -68.816)" fill="#ee7828"/>
                <path id="Trazado_29" data-name="Trazado 29" d="M-1948,1149.993s228.884-206.852,483.21-120.381,343.184-459.971,618.861-218.721,263.989-338.906,529-174.637,351.44-292.512,525.243-299.5S378.283,608.32,378.283,608.32L-11.739,1165.253-1948,1149.993" transform="translate(1541.71 157.37)" fill="#806d61"/>
                <path id="Trazado_28" data-name="Trazado 28" d="M-1948,1149.993s228.884-206.852,483.21-120.381,249.24-384.88,618.861-218.721,237.371-50.865,529-174.637S-11.739,212.377-11.739,212.377v952.876L-1948,1149.993" transform="translate(1956 29.185)" fill="#2c2c2c"/>
            </g>
        </svg>
    </>
}

export default Home