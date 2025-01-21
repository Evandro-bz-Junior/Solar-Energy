import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import ButtonCta from "../ButtonCta/ButtonCta";

const schema = yup
    .object({
        name: yup.string().required('O nome é obrigatório'),
        email: yup.string().email().required('O email é obrigatório'),
        phone: yup.string()
            .matches(/^\d{11}$/, 'O telefone deve conter 11 dígitos numéricos')
            .required('O telefone é obrigatório'),
    })
    .required()

function ContactForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>

                <div className="flex flex-col">
                    <label htmlFor="name" className="mr-2 text-white  ">Nome: {errors.name && <span className='text-red-700  ms-2'>{errors.name?.message}</span>}</label>

                    <input {...register("name", { required: true })}
                        type="text"
                        id="name"
                        name="name"
                        className="w-[350px] sm:w-[300px] lg:w-[350px] p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amarelo focus:outline-none"
                        placeholder="Digite seu nome"
                    />

                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className=" mr-2 text-white font-medium">E-mail: {errors.email && <span className='text-red-700 ms-2'>{errors.email?.message}</span>}</label>

                    <input {...register("email", { required: true })}
                        type="email"
                        id="email"
                        name="email"
                        className="w-[350px] sm:w-[300px] lg:w-[350px] p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amarelo focus:outline-none"
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="phone" className=" mr-2 text-white font-medium">Telefone:{errors.phone && <span className='text-red-700 ms-2'>{errors.phone?.message}</span>}</label>

                    <input {...register("phone", { required: true })}
                        type="tel"
                        id="phone"
                        name="phone"
                        maxLength={11}
                        className="w-[350px] sm:w-[300px] lg:w-[350px] p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amarelo focus:outline-none"
                        placeholder="Digite seu telefone"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message" className=" mr-2 text-white font-medium">Mensagem:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        className="w-[350px] sm:w-[300px] lg:w-[350px] min-h-12 max-h-20 p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-amarelo focus:outline-none"
                        placeholder="Escreva sua mensagem"
                    ></textarea>
                </div>
                <div className="buttons-area flex gap-4">
                    <button
                        type="submit"
                        className="w-[100px] h-10 bg-amarelo text-azul font-bold rounded-lg hover:bg-verde hover:text-white transition duration-300 flex items-center justify-center"
                    >
                        Enviar
                    </button>
                    <ButtonCta />
                </div>

            </form>
        </div>
    );
}

export default ContactForm;