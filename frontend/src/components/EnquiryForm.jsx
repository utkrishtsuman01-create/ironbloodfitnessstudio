import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { waHref } from "@/data/content";

const normalizePhone = (raw) => {
    const digits = raw.replace(/\D/g, "");
    if (digits.length === 10) return digits;
    if (digits.length === 12 && digits.startsWith("91")) return digits.slice(2);
    if (digits.length === 11 && digits.startsWith("0")) return digits.slice(1);
    return digits;
};

export const EnquiryForm = ({ testId = "enquiry" }) => {
    const [form, setForm] = useState({ name: "", phone: "", message: "" });
    const [errors, setErrors] = useState({});

    const set = (key) => (e) => {
        setForm((f) => ({ ...f, [key]: e.target.value }));
        setErrors((er) => ({ ...er, [key]: undefined }));
    };

    const submit = (e) => {
        e.preventDefault();
        const errs = {};
        if (form.name.trim().length < 2) errs.name = "Please enter your full name.";
        const phone = normalizePhone(form.phone);
        if (!/^[6-9]\d{9}$/.test(phone)) errs.phone = "Please enter a valid 10-digit Indian mobile number.";
        if (form.message.trim().length < 5) errs.message = "Please write a short message.";
        setErrors(errs);
        if (Object.keys(errs).length) {
            toast.error("Please fix the highlighted fields.");
            return;
        }
        const text = [
            "Hello Ironblood Fitness Studio,",
            "",
            "I would like to make an enquiry.",
            "",
            `Name: ${form.name.trim()}`,
            `Phone: ${phone}`,
            `Message: ${form.message.trim()}`,
            "",
            "Thank you.",
        ].join("\n");
        window.open(`${waHref}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
        toast.success("Opening WhatsApp — press Send there to deliver your enquiry.");
    };

    const inputCls = (bad) =>
        `w-full bg-[#132B20] border px-4 py-4 text-sm text-white placeholder:text-stone-600 transition-colors focus:outline-none ${
            bad ? "border-[#C9A227]" : "border-stone-800 focus:border-stone-500"
        }`;

    return (
        <form onSubmit={submit} noValidate data-testid={`${testId}-form`} className="space-y-5">
            <div>
                <label htmlFor={`${testId}-name`} className="mb-2 block font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-500">
                    Full Name
                </label>
                <input
                    id={`${testId}-name`}
                    data-testid={`${testId}-name-input`}
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    className={inputCls(errors.name)}
                />
                {errors.name && <p className="mt-2 text-xs text-[#D9B85C]" data-testid={`${testId}-name-error`}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor={`${testId}-phone`} className="mb-2 block font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-500">
                    Phone Number
                </label>
                <input
                    id={`${testId}-phone`}
                    data-testid={`${testId}-phone-input`}
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="10-digit mobile number"
                    aria-invalid={!!errors.phone}
                    className={inputCls(errors.phone)}
                />
                {errors.phone && <p className="mt-2 text-xs text-[#D9B85C]" data-testid={`${testId}-phone-error`}>{errors.phone}</p>}
            </div>
            <div>
                <label htmlFor={`${testId}-message`} className="mb-2 block font-mono2 text-[11px] uppercase tracking-[0.25em] text-stone-500">
                    Message
                </label>
                <textarea
                    id={`${testId}-message`}
                    data-testid={`${testId}-message-input`}
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your goal — fat loss, muscle gain, competition prep…"
                    aria-invalid={!!errors.message}
                    className={`${inputCls(errors.message)} resize-none`}
                />
                {errors.message && <p className="mt-2 text-xs text-[#D9B85C]" data-testid={`${testId}-message-error`}>{errors.message}</p>}
            </div>
            <button
                type="submit"
                data-testid={`${testId}-submit-button`}
                className="group flex w-full items-center justify-center gap-3 bg-[#C9A227] py-4 font-display text-lg font-bold uppercase tracking-wider text-[#1B1409] transition-colors duration-300 hover:bg-[#E3B94E]"
            >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                Send Enquiry on WhatsApp
            </button>
            <p className="text-xs leading-relaxed text-stone-600">
                This opens WhatsApp with your message pre-filled. Your enquiry is delivered only after you press Send inside WhatsApp.
            </p>
        </form>
    );
};

export default EnquiryForm;
