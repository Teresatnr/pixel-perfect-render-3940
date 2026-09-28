import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  consulta: z.string().trim().min(10).max(800),
});

export const generarSintesis = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const { generarSintesisPerfil } = await import("./profile-match.server");
    const sintesis = await generarSintesisPerfil(data.consulta);
    return { sintesis };
  });
