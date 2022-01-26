import Modal from 'components/Modal';

interface IProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: IProps) {
    return (
        <div className="ml-auto mr-auto p-4 content-width">
            {/* <Modal /> */}
            {children}
        </div>
    );
}
