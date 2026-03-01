export function ProfessorCard() {
  return (
    <div className="glass-panel flex w-full flex-col rounded-[1.75rem] p-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Contact Our Professor</p>
      <div className="mt-5 flex items-center gap-5">
        <img
          src="/images/prof-chen.png"
          alt="陳倩瑜 Prof. Chen, Chien-Yu"
          className="h-20 w-20 rounded-full object-cover"
        />
        <div>
          <p className="text-xl font-semibold text-navy">陳倩瑜</p>
          <p className="text-base text-slate-500">Prof. Chen, Chien-Yu</p>
        </div>
      </div>
      <dl className="mt-6 space-y-4 text-base text-slate-600">
        <div>
          <dt className="font-semibold text-slate-700">E-mail</dt>
          <dd><a href="mailto:chienyuchen@ntu.edu.tw" className="hover:text-primary">chienyuchen@ntu.edu.tw</a></dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-700">Tel</dt>
          <dd>02-3366-5335 (系主任辦公室)</dd>
          <dd>02-3366-5334</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-700">研究主題</dt>
          <dd>生物資訊、資料探勘、機器學習</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-700">授課領域</dt>
          <dd>人工智慧概論、資料結構與演算法、生物資訊基石、生醫資料探勘</dd>
        </div>
      </dl>
    </div>
  );
}
