import { FormInput } from "@/components/forms";
import { ConditionRender, Section } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import useUserStore from "@/zustand/useUserStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilePenLine } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().optional(),
  phone: z.string().optional(),
  fullname: z.string().min(1, { message: "Trường này bắt buộc" }),
  avatar: z.array(z.string().url({ message: "Link avatar không hợp lệ" })),
  balance: z.number(),
  score: z.number(),
});

const Personals = () => {
  const { user } = useUserStore();

  const [isEdit, setIsEdit] = useState<boolean>(false);

  const form = useForm({
    defaultValues: {
      email: "",
      phone: "",
      fullname: "",
      avatar: "",
      balance: 0,
      score: 0,
    },
    resolver: zodResolver(FormSchema),
  });

  useEffect(() => {
    if (user) {
      form.reset({
        email: user.email || "",
        phone: user.phone || "",
        fullname: user.fullname || "",
        avatar: user.avatar,
        balance: Number(user.balance) || 0,
        score: user.score || 0,
      });
    }
  }, [user]);

  return (
    <div className="w-[700px] max-w-full m-auto">
      <Section title="Thông tin cá nhân">
        <Form {...form}>
          <form className="grid grid-cols-10 gap-4">
            <div className="col-span-6 space-y-7">
              <FormInput
                readonly={!isEdit}
                form={form}
                label="Tên đầy đủ"
                name="fullname"
              />
              <FormInput
                readonly={true}
                form={form}
                label="Email"
                name="email"
              />
              <FormInput
                readonly={true}
                form={form}
                label="Số điện thoại"
                name="phone"
              />
              <FormInput
                readonly={true}
                form={form}
                label="Số dư tài khoản"
                name="balance"
              />
              <FormInput
                readonly={true}
                form={form}
                label="Điểm tích luỹ"
                name="score"
              />
              <ConditionRender show={!isEdit}>
                <Button variant="outline" onClick={() => setIsEdit(true)}>
                  <FilePenLine size={16} />
                  Cập nhật thông tin
                </Button>
              </ConditionRender>
              <ConditionRender show={isEdit}>
                <div className="flex items-center gap-4">
                  <Button>Cập nhật</Button>
                  <Button
                    onClick={() => setIsEdit(false)}
                    className="bg-orange-600 hover:bg-orange-600/90"
                  >
                    Huỷ bỏ
                  </Button>
                </div>
              </ConditionRender>
            </div>
          </form>
        </Form>
      </Section>
    </div>
  );
};

export default Personals;
