import { Form, NavLink } from "react-router-dom";

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } =
    queryParams;

  return {
    queryKey: [
      "recipes",
      search ?? "",
      category ?? "all",
      company ?? "all",
      sort ?? "a-z",
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () =>
      customFetch(url, {
        params: queryParams,
      }),
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );

    const products = response.data.data;
    const meta = response.data.meta;

    return { products, meta, params };
  };

export const action = (queryClient) => {
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
    const products = response.data.data;
    return { products };
  };
};

function Home() {
  return (
    <div>
      <button className="btn">button</button>

      <h3>gender</h3>
      <form style={{ display: "flex", gap: "10px" }}>
        <label htmlFor="">
          <legend>Male</legend>
          <input type="radio" name="male" />
        </label>
        <legend>Female</legend>
        <input type="radio" name="male" />
      </form>

      {/* menu */}

      <div
        style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}
      >
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Receipes</NavLink>
          </li>
        </ul>
        <button className="btn">Browse recipes</button>
      </div>

      {/* menu-checkbox */}

      <div>
        <div className="menu-checkbox">
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
          <input type="radio" />
        </div>
      </div>

      <Form method="post">
        <input type="text" name="title" />
        <input type="text" name="age" />
        <button type="submit">button</button>
      </Form>
    </div>
  );
}

export default Home;
