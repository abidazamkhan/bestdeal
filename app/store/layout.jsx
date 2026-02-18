import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "Techory. - Store Dashboard",
    description: "Techory. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
