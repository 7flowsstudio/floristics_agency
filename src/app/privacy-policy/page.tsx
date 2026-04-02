import Container from '@/components/layout/Container';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Політика конфіденційності | With Taste',
  description:
    'Правила обробки та захисту персональних даних студії With Taste',
};

export default function PrivacyPolicy() {
  return (
    <main className="py-20 md:py-32">
      <Container>
        <div className="max-w-4xl mx-auto bg-[#F7F5F3] p-8 md:p-12 rounded-[24px] shadow-sm">
          <SectionHeading className="text-left text-[#1C686D] mb-8">
            Політика конфіденційності
          </SectionHeading>

          <div className="space-y-6 text-[#4A4A4A] leading-relaxed">
            <section>
              <h2 className="text-xl font-medium text-[#2D1106] mb-3">
                1. Загальні положення
              </h2>
              <p>
                Ця Політика конфіденційності визначає порядок отримання,
                зберігання та обробки персональних даних користувачів сайту
                студії «With Taste». Ми з повагою ставимося до вашої приватності
                та захищаємо ваші дані відповідно до Закону України «Про захист
                персональних даних».
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[#2D1106] mb-3">
                2. Які дані ми збираємо
              </h2>
              <p>
                Ми збираємо лише ту інформацію, яку ви надаєте добровільно через
                форму запису на курси:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ім’я та прізвище;</li>
                <li>Номер контактного телефону;</li>
                <li>Обраний курс флористики;</li>
                <li>Додаткові питання або коментарі (за наявності).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[#2D1106] mb-3">
                3. Мета збору даних
              </h2>
              <p>Ваші дані використовуються виключно для:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Зворотного зв’язку та консультацій щодо навчання;</li>
                <li>Бронювання місця на обраному курсі;</li>
                <li>Інформування про деталі проведення занять.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[#2D1106] mb-3">
                4. Захист та передача даних
              </h2>
              <p>
                Ми не передаємо ваші персональні дані третім особам, окрім
                випадків, передбачених законодавством України. Ми вживаємо
                необхідних технічних заходів для захисту інформації від
                несанкціонованого доступу.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-[#2D1106] mb-3">
                5. Ваші права
              </h2>
              <p>
                Ви маєте право в будь-який момент відкликати згоду на обробку
                даних або попросити їх видалити, звернувшись до нас за
                контактами, вказаними на сайті.
              </p>
            </section>

            <p className="pt-4 text-sm italic border-t border-[#9DC6C9]">
              Останнє оновлення: {new Date().toLocaleDateString('uk-UA')}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
