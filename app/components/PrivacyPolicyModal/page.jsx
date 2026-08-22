import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import { LanguageProvider } from '@/context/LanguageContext';

export default function PrivacyPolicyPage() {
  return (
    <LanguageProvider>
      <PrivacyPolicyModal />
    </LanguageProvider>
  );
}