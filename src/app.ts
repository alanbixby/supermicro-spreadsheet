import got from 'got'
import FormData from 'form-data'

function buildForm(pageNum: number): FormData {
  const form = new FormData()
  form.append('draw', 2)
  form.append('columns[0][data]', 'sSku')
  form.append('columns[0][name]', '')
  form.append('columns[0][searchable]', 'true')
  form.append('columns[0][orderable]', 'true')
  form.append('columns[0][search][value]', '')
  form.append('columns[0][search][regex]', 'false')
  form.append('columns[1][data]', 'sFormFactor')
  form.append('columns[1][name]', '')
  form.append('columns[1][searchable]', 'true')
  form.append('columns[1][orderable]', 'true')
  form.append('columns[1][search][value]', '')
  form.append('columns[1][search][regex]', 'false')
  form.append('columns[2][data]', 'sPowerSupply')
  form.append('columns[2][name]', '')
  form.append('columns[2][searchable]', 'true')
  form.append('columns[2][orderable]', 'true')
  form.append('columns[2][search][value]', '')
  form.append('columns[2][search][regex]', 'false')
  form.append('columns[3][data]', 'sPsuSKU')
  form.append('columns[3][name]', '')
  form.append('columns[3][searchable]', 'true')
  form.append('columns[3][orderable]', 'true')
  form.append('columns[3][search][value]', '')
  form.append('columns[3][search][regex]', 'false')
  form.append('columns[4][data]', 'bRedundantPowerSupply')
  form.append('columns[4][name]', '')
  form.append('columns[4][searchable]', 'true')
  form.append('columns[4][orderable]', 'true')
  form.append('columns[4][search][value]', '')
  form.append('columns[4][search][regex]', 'false')
  form.append('columns[5][data]', 'blsGlobalSku')
  form.append('columns[5][name]', '')
  form.append('columns[5][searchable]', 'true')
  form.append('columns[5][orderable]', 'true')
  form.append('columns[5][search][value]', '')
  form.append('columns[5][search][regex]', 'false')
  form.append('columns[6][data]', 'blsEOL')
  form.append('columns[6][name]', '')
  form.append('columns[6][searchable]', 'true')
  form.append('columns[6][orderable]', 'true')
  form.append('columns[6][search][value]', '')
  form.append('columns[6][search][regex]', 'false')
  form.append('order[0][column]', 0)
  form.append('order[0][dir]', 'asc')
  form.append('start', 50)
  form.append('length', 50)
  form.append('search[value]', '')
  form.append('search[regex]', 'false')
  form.append('perPageRowCount', 50)
  form.append('page', pageNum)
  form.append('sort', 'sSku')
  form.append('sortDir', 'ASC')
  return form
}

;(async () => {
  const output = new Set()
  for (let i = 1; i < Math.floor(542 / 50); i++) {
    const res = await got(
      'https://www.supermicro.com/en/external_db_block/support2/get_chassis_list',
      {
        method: 'post',
        body: buildForm(1),
      }
    )
    // @ts-ignore
    const json = await JSON.parse(res.body)
    console.log('page ', i)
    for (const item of json.returnData.aList) {
      output.add(item)
    }
  }
  for (const item of output) {
    console.log(item)
  }
})()
