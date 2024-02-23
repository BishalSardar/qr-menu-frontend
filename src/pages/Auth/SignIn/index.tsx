import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { baseURL } from "@/core/constant/base_url";
import axios from "axios";
import toast from "react-hot-toast";
import { setTokenCookie } from "@/core/utils/cookie";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({ message: "Enter valid email address." }),
  password: z.string().min(2, {
    message: "Enter password",
  }),
});

const SignIn = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log("hello world");
      const res = await axios.post(
        `${baseURL}/api/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Signin successfull");
        const tokens = res.data.token;
        setTokenCookie(tokens);
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      form.reset();
      toast.error("Username or password is incorrect");
    }
  };

  return (
    <>
      <div className="px-8 md:px-32 lg:px-20 flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-[30%] p-10 rounded-3xl bg-white shadow-md">
          <h1 className="font-extrabold text-[24px] text-orange-500 mb-5">
            Sign In
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 flex flex-col"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        readOnly={isSubmitting}
                        placeholder="Email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        readOnly={isSubmitting}
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="bg-orange-500 hover:bg-orange-700 flex-1"
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
