// import dependencies
import React from "react";
import { prettyDOM } from "@testing-library/dom";

// import API mocking utilities from Mock Service Worker
import { rest } from "msw";
import { setupServer } from "msw/node";

// import react-testing methods
import { render, fireEvent, waitFor, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";
import CompanyView from "../CompanyView";
import { API } from "../../helpers";

const id = 71;
const server = setupServer(
  rest.get(`/api/companies/${id}`, (req, res, ctx) => {
    return res(ctx.json({ greeting: "hello there" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("handles server error", async () => {
  server.use(
    // override the initial "GET /greeting" request handler
    // to return a 500 Server Error
    rest.get(`/api/companies/${id}`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  const { debug } = render(<CompanyView />);
  console.log(debug());

  // const el = screen.getByRole("heading");
  // expect(el).toHaveTextContent("Hello");
});
