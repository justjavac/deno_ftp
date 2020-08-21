import { assertEquals } from "https://deno.land/std@0.65.0/testing/asserts.ts";

import ftp from "./mod.ts";

Deno.test("test ftp function", (): void => {
  assertEquals(ftp("abc"), "abc");
});
